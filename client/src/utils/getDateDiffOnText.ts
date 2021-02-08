export default function getDateDiffOnText(updateString: string): string {
  const updateDateString = Date.parse(updateString);

  if (!updateDateString) return 'No Date';

  const updateDate = new Date(updateDateString);
  const today = new Date();
  const diffMs = today.getTime() - updateDate.getTime();

  const diffDays = Math.floor(diffMs / 86400000);

  if (diffDays >= 1) {
    return `${diffDays} days`;
  }

  const diffHrs = Math.floor((diffMs % 86400000) / 3600000);

  if (diffHrs >= 1) {
    return `${diffHrs} hours`;
  }

  const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);

  if (diffMins >= 1) {
    return `${diffHrs} hours`;
  }

  const diffSec = Math.round((((diffMs % 86400000) % 3600000) % 60000) % 60000);

  return `${diffSec} hours`;
}
