import { FC } from 'react';
import { Header } from '@cloudscape-design/components';
import Table from '@cloudscape-design/components/table';
import Box from '@cloudscape-design/components/box';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import { Link } from 'react-router-dom';

const HomeTable: FC = () => {
  return (
    <Table
      columnDefinitions={[
        {
          id: 'variable',
          header: '회사명',
          cell: (item) => <Link to={`/${item.name}`}>{item.name || '-'}</Link>,
          sortingField: 'name',
          isRowHeader: true,
        },
        {
          id: 'alt',
          header: '인원',
          cell: (item) => item.alt || '-',
          sortingField: 'alt',
        },
        {
          id: 'description',
          header: '남은 포인트',
          cell: (item) => item.description || '-',
        },
      ]}
      enableKeyboardNavigation
      items={[
        {
          name: '캐쉬풀어스',
          alt: '12',
          description: '300,000',
          type: '1A',
          size: 'Small',
        },
        {
          name: 'MN비젼',
          alt: '20',
          description: '400,000',
          type: '1B',
          size: 'Large',
        },
        {
          name: 'YH데이터베이스',
          alt: '33',
          description: '500,000',
          type: '1A',
          size: 'Large',
        },
        {
          name: '일만백만',
          alt: '7',
          description: '250,000',
          type: '2A',
          size: 'Small',
        },
        {
          name: '타임시스템',
          alt: '15',
          description: '300,000',
          type: '2A',
          size: 'Large',
        },
        {
          name: '웨보노믹스',
          alt: '40',
          description: '1,000,000',
          type: '1A',
          size: 'Small',
        },
      ]}
      loadingText="Loading resources"
      sortingDisabled
      empty={
        <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
          <SpaceBetween size="m">
            <b>No resources</b>
            <Button>Create resource</Button>
          </SpaceBetween>
        </Box>
      }
      header={<Header>가입 회사 리스트</Header>}
    />
  );
};

export default HomeTable;
