export const modes = ["default", "pre-placed"] as const;
export type Mode = (typeof modes)[number];
