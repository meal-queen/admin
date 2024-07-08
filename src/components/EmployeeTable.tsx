import { FC, useEffect, useState } from 'react';
import { Header, Pagination, TextFilter } from '@cloudscape-design/components';
import Table from '@cloudscape-design/components/table';
import Box from '@cloudscape-design/components/box';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getCookie } from '../utils/cookies';
import axios from 'axios';
import Button from '@cloudscape-design/components/button';
import qs from 'query-string';

const EmployeeTable: FC = () => {
  const [data, setData] = useState<any>();
  const { page } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const query = qs.parse(location.search);

  useEffect(() => {
    if (!query.company) navigate('/0');

    axios(
      `/api/company/users?page=${page ?? 0}&take=10&company=${
        query.company
      }&role=${query.role ?? 'ROLE_USER'}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getCookie('auth_token')}`,
        },
      }
    )
      .then((res) => {
        setData(res.data.data);
      })
      .catch(() => {
        navigate('/');
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
              header: '유저 이름',
              cell: (item: any) => item.name,
            },
          ]}
          loadingText="Loading resources"
          empty={
            <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
              <SpaceBetween size="m">
                <b>No matches</b>
                {/* <Button>Clear filter</Button> */}
              </SpaceBetween>
            </Box>
          }
          // filter={
          //   <TextFilter
          //     filteringPlaceholder="Find resources"
          //     filteringText="asdfjkl"
          //   />
          // }
          header={
            <Header
            // counter={
            //   data.content.length
            //     ? '(' + data.content.length + '/10)'
            //     : '(10)'
            // }
            >
              가입 회사 직원 리스트
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

export default EmployeeTable;
