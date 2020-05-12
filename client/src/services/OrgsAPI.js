const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export async function addOrg(body) {
  const response = await fetch(`${API_URL}/orgs`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
}

export async function getOrgByName(org) {
  const response = await fetch(`${API_URL}/orgs/getOrgByName`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(org),
  });
  return response.json();
}
