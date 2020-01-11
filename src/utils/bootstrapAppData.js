import { getUser } from '../services/auth-client';
import { readForUser } from '../services/collections-client';

async function bootstrapAppData() {
  const user = await getUser();

  if (!user) {
    return { user: null, collections: [] };
  }

  const { collections } = await readForUser(user.username);
  return {
    user,
    collections,
  };
}

export { bootstrapAppData };
