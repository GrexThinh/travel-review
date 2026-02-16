import { RATING_TEXT_MAP } from "../mapper/rating-mapper";

export function getRatingLabel(value: number): string {
    return RATING_TEXT_MAP[value] ?? '';
}