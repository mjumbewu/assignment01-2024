import { expect, describe, it } from '@jest/globals';
import './jest_extensions';

describe('Part 1 - Query 05', () => {
  it('should return the correct results', async () => {
    await expect('../part1/query05.sql')
      .toReturnRecords(
        ['expected_results/part1/query05.csv'],
      );
  });
});