import { FC, useEffect, useState } from 'react';
import Table from '@cloudscape-design/components/table';
import Box from '@cloudscape-design/components/box';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Header from '@cloudscape-design/components/header';
import Pagination from '@cloudscape-design/components/pagination';
import axios from 'axios';
import { getCookie } from '../utils/cookies';
import { useNavigate, useParams } from 'react-router-dom';

const RestaurantTable: FC = () => {
  const [data, setData] = useState<any>();
  const { page } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios(`/api/restaurant/?page=${page ?? 0}&take=10`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getCookie('auth_token')}`,
      },
    }).then((res) => {
      setData(res.data.data);
    });
  }, [page]);

  return (
    <>
      {!data ? (
        <></>
      ) : (
        <Table
          columnDefinitions={[
            {
              id: 'uuid',
              header: 'uuid',
              cell: (item: any) => item.uuid,
            },
            {
              id: 'name',
              header: '가맹정 이름',
              cell: (item: any) => item.name,
            },
            {
              id: 'address',
              header: '가맹정 위치',
              cell: (item: any) => item.address,
            },
            {
              id: 'point',
              header: '남은 금액',
              cell: (item: any) => item.point,
            },
          ]}
          loadingText="Loading resources"
          empty={
            <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
              <SpaceBetween size="m">
                <b>No resources</b>
              </SpaceBetween>
            </Box>
          }
          header={
            <Header
              counter={
                data.content.length
                  ? '(' + data.content.length + '/10)'
                  : '(10)'
              }
            >
              가입 가맹점 리스트
            </Header>
          }
          items={data.content}
          pagination={
            <Pagination
              currentPageIndex={Number(page)}
              pagesCount={data.totalPages - 1}
              onChange={(e) =>
                navigate(
                  `/${
                    e.detail.currentPageIndex < 0 || !e.detail.currentPageIndex
                      ? 0
                      : e.detail.currentPageIndex
                  }`
                )
              }
            />
          }
        />
      )}
    </>
  );
};

export default RestaurantTable;
