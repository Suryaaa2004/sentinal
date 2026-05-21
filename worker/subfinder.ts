import { exec } from "child_process";
import { prisma } from "../src/lib/prisma";

export async function runSubfinder(
  organizationId: string,
  domain: string
) {
  return new Promise((resolve, reject) => {

    exec(
      `subfinder -d ${domain} -silent`,
      async (error, stdout) => {

        if (error) {
          reject(error);
          return;
        }

        const subs =
          stdout
            .split("\n")
            .filter(Boolean);

        for (const sub of subs) {
          await prisma.asset.create({
            data: {
              domain: sub,
              organizationId,
            },
          });
        }

        resolve(subs);

      }
    );

  });
}