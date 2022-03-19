export enum ProjectState {
    PAUSED = 'PAUSED',
    PRESALE = 'PRESALE',
    PUBLIC = 'PUBLIC',
}

export enum Plan {
    UNDECIDED = 'UNDECIDED',
    FLIP = 'FLIP',
    HODL = 'HODL',
}

export interface Project {
    name: string;
    supply?: number;
    acquiredAllowList?: boolean;
    totalAllowlistSpots?: number;
    plan?: Plan;
    twitterHandle?: string;
    discordUrl?: string;
    openseaUrl?: string;
    presaleDatetime?: string;
    publicSaleDatetime?: string;
    revealDatetime?: string;
    hasAllowList?: boolean;
    isRevealed?: boolean;
    projectState?: ProjectState;
    presaleMintPrice?: number;
    publicSaleMintPrice?: number;
    presaleMaxMintPerTransaction?: number;
    publicSaleMaxMintPerTransaction?: number;
    contractAddress?: string;
    isArchived?: boolean;
}
