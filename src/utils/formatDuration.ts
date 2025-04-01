import { intervalToDuration } from "date-fns";

export function formatDuration(minutes: number): string {
  // Tính khoảng thời gian từ 0 đến số phút * 60,000 (ms)
  const duration = intervalToDuration({ start: 0, end: minutes * 60000 });
  // Lấy số giờ và số phút từ duration (nếu không có giá trị thì gán mặc định là 0)
  const hours = duration.hours ?? 0;
  const minutesRemaining = duration.minutes ?? 0;
  // Định dạng: số giờ và số phút (đảm bảo số phút có 2 chữ số)
  return `${hours}h${minutesRemaining.toString().padStart(2, "0")}m`;
}
