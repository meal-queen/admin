import { FC, useState } from 'react';
import Table from '@cloudscape-design/components/table';
import Box from '@cloudscape-design/components/box';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import Header from '@cloudscape-design/components/header';
import Pagination from '@cloudscape-design/components/pagination';
import CollectionPreferences from '@cloudscape-design/components/collection-preferences';

interface DataItem {
  name: string;
  alt: string;
  description: string;
  type: string;
  size: string;
}

const CompanyTable: FC = () => {
  const [selectedItems, setSelectedItems] = useState<DataItem[]>([]);
  return (
    <Table
      onSelectionChange={({ detail }) => setSelectedItems(detail.selectedItems)}
      selectedItems={selectedItems}
      ariaLabels={{
        selectionGroupLabel: 'Items selection',
        allItemsSelectionLabel: ({ selectedItems }) =>
          `${selectedItems.length} ${
            selectedItems.length === 1 ? 'item' : 'items'
          } selected`,
        itemSelectionLabel: (_, item) => item.name,
      }}
      columnDefinitions={[
        {
          id: 'variable',
          header: '직원명',
          cell: (e) => e.name,
          sortingField: 'name',
          isRowHeader: true,
        },
        {
          id: 'value',
          header: '직급',
          cell: (item) => item.alt,
          sortingField: 'alt',
        },
        {
          id: 'type',
          header: '지급액',
          cell: (item) => item.type,
        },
        {
          id: 'description',
          header: '남은 금액',
          cell: (item) => item.description,
        },
      ]}
      columnDisplay={[
        { id: 'variable', visible: true },
        { id: 'value', visible: true },
        { id: 'type', visible: true },
        { id: 'description', visible: true },
      ]}
      enableKeyboardNavigation
      items={[
        {
          name: '최태혁',
          alt: '직원',
          description: '20,000',
          type: '200,000',
          size: 'Small',
        },
        {
          name: '장수진',
          alt: '팀장',
          description: '30,000',
          type: '300,000',
          size: 'Large',
        },
        {
          name: '현국영',
          alt: '직원',
          description: '36,200',
          type: '200,000',
          size: 'Large',
        },
        {
          name: '이상민',
          alt: '직원',
          description: '12,000',
          type: '200,000',
          size: 'Small',
        },
        {
          name: '김태민',
          alt: '팀장',
          description: '28,400',
          type: '300,000',
          size: 'Large',
        },
        {
          name: '이수민',
          alt: '직원',
          description: '14,800',
          type: '200,000',
          size: 'Small',
        },
      ]}
      loadingText="Loading resources"
      selectionType="multi"
      trackBy="name"
      empty={
        <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
          <SpaceBetween size="m">
            <b>No resources</b>
            <Button>Create resource</Button>
          </SpaceBetween>
        </Box>
      }
      header={
        <Header
          counter={
            selectedItems.length ? '(' + selectedItems.length + '/10)' : '(10)'
          }
        >
          직원 리스트
        </Header>
      }
      pagination={<Pagination currentPageIndex={1} pagesCount={2} />}
      preferences={
        <CollectionPreferences
          title="Preferences"
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          preferences={{
            pageSize: 10,
            contentDisplay: [
              { id: 'variable', visible: true },
              { id: 'value', visible: true },
              { id: 'type', visible: true },
              { id: 'description', visible: true },
            ],
          }}
          pageSizePreference={{
            title: 'Page size',
            options: [
              { value: 10, label: '10 resources' },
              { value: 20, label: '20 resources' },
            ],
          }}
          wrapLinesPreference={{}}
          stripedRowsPreference={{}}
          contentDensityPreference={{}}
          contentDisplayPreference={{
            options: [
              {
                id: 'variable',
                label: 'Variable name',
                alwaysVisible: true,
              },
              { id: 'value', label: 'Text value' },
              { id: 'type', label: 'Type' },
              { id: 'description', label: 'Description' },
            ],
          }}
          stickyColumnsPreference={{
            firstColumns: {
              title: 'Stick first column(s)',
              description:
                'Keep the first column(s) visible while horizontally scrolling the table content.',
              options: [
                { label: 'None', value: 0 },
                { label: 'First column', value: 1 },
                { label: 'First two columns', value: 2 },
              ],
            },
            lastColumns: {
              title: 'Stick last column',
              description:
                'Keep the last column visible while horizontally scrolling the table content.',
              options: [
                { label: 'None', value: 0 },
                { label: 'Last column', value: 1 },
              ],
            },
          }}
        />
      }
    />
  );
};

export default CompanyTable;
