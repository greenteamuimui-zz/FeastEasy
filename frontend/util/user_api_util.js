export const updateUser = (id, image_url) => {
  return (
    $.ajax({
      method: 'PUT',
      url: `/api/users/${id}`,
      data: {user: {image_url: image_url}}
    })
  );
};

export const fetchUsers = () => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/users',
    })
  );
};
