import { Octokit } from "@octokit/core";
import { NextResponse, NextRequest } from "next/server";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
});

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");

    if (!username) {
        return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    // ✅ Check if token exists
    if (!process.env.GITHUB_TOKEN) {
        console.error("GITHUB_TOKEN is missing!");
        return NextResponse.json({ error: "GitHub token not configured" }, { status: 500 });
    }

    try {
        const query = `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }`;

        interface GitHubResponse {
            user: {
                contributionsCollection: {
                    contributionCalendar: {
                        totalContributions: number;
                        weeks: Array<{
                            contributionDays: Array<{
                                contributionCount: number;
                                date: string;
                            }>;
                        }>;
                    };
                };
            };
        }

        const response = await octokit.graphql<GitHubResponse>(query, { username });
        console.log("GitHub response received ✅");

        const calendar = response.user.contributionsCollection.contributionCalendar;

        const contributions = calendar.weeks.flatMap((week) =>
            week.contributionDays.map((day: { contributionCount: number; date: string }) => ({
                count: day.contributionCount,
                date: day.date,
            }))
        );

        return NextResponse.json({
            user: { totalContribution: calendar.totalContributions },
            contributions
        });

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        console.error("GITHUB API ERROR:", errorMessage); // ← shows exact error
        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}