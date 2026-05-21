import { prisma } from "../src/lib/prisma";

export async function detectDrift(
  organizationId: string,
  currentAssets: string[]
) {

  const previous =
    await prisma.snapshot.findMany({
      where: {
        organizationId,
      },
    });

  const previousDomains = previous.flatMap(
    x => x.assets as string[]
  );

  const newAssets = currentAssets.filter(
    x => !previousDomains.includes(x)
  );

  for (const asset of newAssets) {
    await prisma.alert.create({
      data: {
        title: `New asset discovered: ${asset}`,
        severity: "HIGH",
      },
    });
  }

  await prisma.snapshot.create({
    data: {
      organizationId,
      assets: currentAssets,
    },
  });

  return newAssets;

}