export enum ProjectState {
    PAUSED = 'PAUSED',
    PRESALE = 'PRESALE',
    PUBLIC = 'PUBLIC',
}

export interface Project {
    name: string;
    supply?: number;
    allocatedAllowlistAmount?: number;
    totalAllowlistSpots?: number;
    description?: string;
    twitterHandle?: string;
    discordUrl?: string;
    openseaUrl?: string;
    presaleDatetime?: string;
    publicSaleDatetime?: string;
    revealDatetime?: string;
    hasAllowList?: boolean;
    isRevealed?: boolean;
    projectState?: ProjectState;
    presaleMintPrice?: string;
    publicSaleMintPrice?: string;
    presaleMaxMintPerTransaction?: number;
    publicSaleMaxMintPerTransaction?: number;
    contractAddress?: string;
}
