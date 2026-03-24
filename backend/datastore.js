let reports = [];

function addReport(report) {
  reports.push(report);
}

function searchReports(query) {
  return reports.filter(r =>
    (r.phone && r.phone.includes(query)) ||
    (r.bank && r.bank.includes(query)) ||
    (r.social && r.social.includes(query))
  );
}

module.exports = { reports, addReport, searchReports };
