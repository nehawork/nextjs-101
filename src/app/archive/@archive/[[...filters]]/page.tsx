export default async function LatestPage({
  params,
}: {
  params: { filters: string[] };
}) {
  const { filters } = await params;

  const availableYears = ['2024', '2023', '2022'];
  const availableMonths = ['1', '2'];

  const selectedYear = filters?.[0];
  const selectedMonth = filters?.[1];

  if (
    (selectedYear && !availableYears.includes(selectedYear)) ||
    (selectedMonth && !availableMonths.includes(selectedMonth))
  ) {
    throw new Error('Invalid Filters!');
  }

  const news = [
    {
      title: 'News 1',
    },
  ];

  return (
    <div>
      <div className='flex'>
        {!selectedMonth &&
          availableYears.map((year) => (
            <p className={year === selectedYear ? 'text-bold' : ''} key={year}>
              {year}
            </p>
          ))}
        {selectedMonth &&
          availableMonths.map((month) => (
            <p className={month === selectedMonth ? 'bold' : ''} key={month}>
              {month}
            </p>
          ))}
      </div>
      {news.map((newsDetail, index) => (
        <div key={index}>{newsDetail.title}</div>
      ))}
    </div>
  );
}
