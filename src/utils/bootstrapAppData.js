import { getUser } from '../services/auth-client';
import { getCollectionsCreatedBy } from '../services/collections-client';

async function bootstrapAppData() {
  const user = await getUser();

  if (!user) {
    return { user: null, collections: [] };
  }

  const collections = await getCollectionsCreatedBy(user.username);
  return {
    user,
    collections,
  };
}

export { bootstrapAppData };
