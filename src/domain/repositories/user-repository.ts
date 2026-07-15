export interface UpsertUserProfileInput {
  email: string;
  displayName?: string | null;
}

export interface UserRepository {
  upsertProfile(input: UpsertUserProfileInput): Promise<void>;
}
