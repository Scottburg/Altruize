const API_URL = process.env.REACT_APP_API_URL || '';

export async function getUserByName (user) {
  const response = await fetch(`${API_URL}/users/getUserByName`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
}

export async function getUserById () {
  const response = await fetch(`${API_URL}/users/getUserById`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('altruize-token')}`,
    },
  });
  return response.json();
}

export async function persistantLoginUser () {
  const response = await fetch(`${API_URL}/users/persistantLogin`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('altruize-token')}`,
    },
  });
  return response.json();
}

export async function getUserByLoginId () {
  const response = await fetch(`${API_URL}/users/getUserByLoginId`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('altruize-token')}`,
    },
  });
  return response.json();
}

export async function getUserLogin (user) {
  const response = await fetch(`${API_URL}/users/getUserLogin`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
}

export async function addEventToUser (event) {
  const response = await fetch(`${API_URL}/users/addEventToUser`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(event),
  });
  return response.json();
}
export async function deleteEventFromUser (event) {
  const response = await fetch(`${API_URL}/users/deleteEventFromUser`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(event),
  });
  return response.json();
}

export async function addUser (user) {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response;
}

export async function updateUser (user) {
  const response = await fetch(`${API_URL}/users/updateuser`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
}
