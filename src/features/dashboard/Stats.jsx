import {
  HiOutlineBanknotes,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { HiOutlineBriefcase } from "react-icons/hi";
import { formatCurrency } from "../../utils/helpers";
function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1. Number of bookings
  const numBookings = bookings.length;

  // 2. Total sales
  const sales = formatCurrency(
    bookings.reduce((total, booking) => {
      return total + booking.totalPrice;
    }, 0),
  );
  //3. Total check ins
  const checking = confirmedStays.length;

  //4. Occupancy rate
  const occupation =
    confirmedStays.reduce((total, stay) => {
      return total + stay.numNights;
    }, 0) /
    (numDays * cabinCount);

  const occupancyRate = Math.ceil(occupation * 100) + "%";

  return (
    <>
      <Stat
        title="Bookings"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
        color="blue"
      />

      <Stat
        title="Sales"
        icon={<HiOutlineBanknotes />}
        value={sales}
        color="green"
      />

      <Stat
        title="Checked in"
        icon={<HiOutlineCalendarDays />}
        value={checking}
        color="indigo"
      />

      <Stat
        title="Occupancy rate"
        icon={<HiOutlineChartBar />}
        value={occupancyRate}
        color="yellow"
      />
    </>
  );
}

export default Stats;
