import { getUser } from '../services/auth-client';
import { getCollectionsCreatedBy } from '../services/collections-client';

async function bootstrapAppData() {
  const user = await getUser();

  if (!user) {
    return { user: null, collections: [] };
  }

  const username = user.username;
  const collections = await getCollectionsCreatedBy({ username });
  return {
    user,
    collections,
  };
}

export { bootstrapAppData };
