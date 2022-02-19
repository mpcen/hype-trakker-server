export enum ProjectState {
    PAUSED = 'PAUSED',
    PRESALE = 'PRESALE',
    PUBLIC_SALE = 'PUBLIC_SALE',
}

export interface Project {
    name: string;
    supply?: number;
    allocatedAllowlistAmount?: number;
    description?: string;
    twitterHandle?: string;
    discordUrl?: string;
    openseaUrl?: string;
    presaleDatetime?: string;
    publicSaleDatetime?: string;
    hasAllowList?: boolean;
    isRevealed?: boolean;
    projectState?: ProjectState;
    mintPrice?: string;
    maxMintPerTransaction?: number;
}
