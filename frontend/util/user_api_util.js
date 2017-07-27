export const updateUser = (id, image_url) => {
  return (
    $.ajax({
      method: 'PUT',
      url: `/api/users/${id}`,
      data: {image_url}
    })
  );
};
