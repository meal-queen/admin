import { ContentLayout, Header } from '@cloudscape-design/components';
import HomeTable from '../components/HomeTable';

export default function Home() {
  return (
    <ContentLayout header={<Header variant="h1">식사임당 ADMIN</Header>}>
      <HomeTable />
    </ContentLayout>
  );
}
