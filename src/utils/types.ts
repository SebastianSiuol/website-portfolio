export type Project = {
    id: string;
    projectName: string;
    description: string;
    image: string;
    images: string[];
    techUsed: {
        name: string;
        icon: React.ReactElement | null;
    }[];
    experience: string;
};