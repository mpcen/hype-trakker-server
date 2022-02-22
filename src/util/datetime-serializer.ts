import { isValid } from 'date-fns';

export const serializeDatetime = (date: string | undefined) => {
    if (!date || !isValid(new Date(date))) {
        return undefined;
    }

    return new Date(date).toISOString();
};
