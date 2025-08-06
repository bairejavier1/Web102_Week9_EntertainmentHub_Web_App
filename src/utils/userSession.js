export function getUserId() {
    let userId = localStorage.getItem('pingpong-user-id');
    if (!userId) {
      userId = Math.random().toString(36).substring(2, 15);
      localStorage.setItem('pingpong-user-id', userId);
    }
    return userId;
  }
  