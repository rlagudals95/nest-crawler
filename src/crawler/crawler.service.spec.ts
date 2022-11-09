import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerService } from './crawler.service';
import { NestCrawlerService } from 'nest-crawler';

describe('CrawlerService', () => {
  let crawlerService: CrawlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrawlerService, NestCrawlerService],
    }).compile();

    crawlerService = module.get<CrawlerService>(CrawlerService);
  });

  const result = async () => {
    await crawlerService.scrape();
  };

  describe('root', () => {
    it('crawlering', () => {
      console.log(result)
      expect(result).toBe('Hello World!');
    });
  });

  //await expect(result)
});


