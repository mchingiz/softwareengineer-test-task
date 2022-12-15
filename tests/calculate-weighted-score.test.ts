import { assert } from 'chai';
import { calculateWeightedScore } from '../src/utils';

const onlyWeightlessRated = [
    { rating: 0, weight: 1 },
    { rating: 0, weight: 0.7 },
    { rating: 0, weight: 1.2 },
    { rating: 2, weight: 0 },
];
const allFiveExceptWeightless = [
    { rating: 5, weight: 1 },
    { rating: 5, weight: 0.7 },
    { rating: 5, weight: 1.2 },
    { rating: 0, weight: 0 },
];
const randomSet1 = [
    { rating: 3, weight: 1 },
    { rating: 4, weight: 0.7 },
    { rating: 2, weight: 1.2 },
    { rating: 4, weight: 0 },
];
const randomSet2 = [
    { rating: 2, weight: 1 },
    { rating: 4, weight: 0.2 },
    { rating: 1, weight: 0.5 },
    { rating: 5, weight: 0 },
];


describe('calculateWeightedScore', () => {
    it('Score should be zero if only categories with zero weights has ratings', () => {
        const score = calculateWeightedScore(onlyWeightlessRated);
        assert.equal(score, 0);
    })

    it('Score should be max if all positive weight categories has max score', () => {
        const score = calculateWeightedScore(allFiveExceptWeightless);
        assert.equal(score, 100);
    })

    describe('Random sets', () => {
        it('Random set 1', () => {
            const score = calculateWeightedScore(randomSet1);
            assert.equal(score, 56);
        })

        it('Random set 2', () => {
            const score = calculateWeightedScore(randomSet2);
            assert.equal(score, 38);
        })
    })
})