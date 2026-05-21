import { exec } from "child_process";

export async function runHttpx(
  domains: string[]
): Promise<string[]> {

  return new Promise((resolve, reject) => {

    const input =
      domains.join(" ");

    exec(
      `httpx -silent ${input}`,
      (error, stdout) => {

        if (error) {
          reject(error);
          return;
        }

        const alive =
          stdout
            .split("\n")
            .filter(Boolean);

        resolve(alive);

      }
    );

  });

}