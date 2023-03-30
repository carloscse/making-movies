export function fetchMovie(data) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: data }), 3000)
    );
  }
  