import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: bookingsLoading } = useRecentBookings();
  const { stays, confirmedStays, isLoading: staysLoading } = useRecentStays();
  if (bookingsLoading || staysLoading) return <Spinner />;
  console.log(bookings, stays, confirmedStays);
  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today&apos;s activities</div>
      <div>Chart stay durations</div>
      <div>Cart of sales</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
