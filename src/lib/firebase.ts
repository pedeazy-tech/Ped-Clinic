import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

let firebaseApp: any = null;
let db: any = null;
let auth: any = null;
let isFirebaseConfigured = false;

const hasRealConfig = firebaseConfig && 
                     firebaseConfig.apiKey && 
                     firebaseConfig.apiKey !== "mock-api-key" && 
                     !firebaseConfig.apiKey.includes("PLACEHOLDER");

if (hasRealConfig) {
  try {
    firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    const dbId = (firebaseConfig as any).firestoreDatabaseId;
    db = dbId ? getFirestore(firebaseApp, dbId) : getFirestore(firebaseApp);
    auth = getAuth(firebaseApp);
    isFirebaseConfigured = true;
  } catch (error) {
    console.error("Failed to initialize Firebase SDK:", error);
  }
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth?.currentUser?.uid || null,
      email: auth?.currentUser?.email || null,
      emailVerified: auth?.currentUser?.emailVerified || null,
      isAnonymous: auth?.currentUser?.isAnonymous || null,
      tenantId: auth?.currentUser?.tenantId || null,
      providerInfo: auth?.currentUser?.providerData?.map((provider: any) => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export { db, auth, isFirebaseConfigured, GoogleAuthProvider, signInWithPopup, signOut };
