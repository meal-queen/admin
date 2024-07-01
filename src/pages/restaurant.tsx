import { ContentLayout, Header } from '@cloudscape-design/components';
import RestaurantTable from '../components/RestaurantTable';

export default function Business() {
  return (
    <ContentLayout header={<Header variant="h1">식사임당 ADMIN</Header>}>
      <RestaurantTable />
    </ContentLayout>
  );
}
