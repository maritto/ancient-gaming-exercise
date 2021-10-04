

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: boxList
// ====================================================

export interface boxList_boxes_edges_node {
  id: string;
  name: string | null;
  iconUrl: string | null;
  cost: number | null;
}

export interface boxList_boxes_edges {
  node: boxList_boxes_edges_node | null;
}

export interface boxList_boxes {
  edges: (boxList_boxes_edges | null)[] | null;
}

export interface boxList {
  boxes: boxList_boxes;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Wallets
// ====================================================

export interface Wallets_currentUser_wallets {
  id: string;
  amount: number | null;
  currency: string;
}

export interface Wallets_currentUser {
  id: string;
  avatar: string | null;
  displayName: string | null;
  wallets: (Wallets_currentUser_wallets | null)[] | null;
}

export interface Wallets {
  currentUser: Wallets_currentUser | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: OnUpdateWallet
// ====================================================

export interface OnUpdateWallet_updateWallet_wallet {
  id: string;
  amount: number | null;
  name: WalletType | null;
}

export interface OnUpdateWallet_updateWallet {
  wallet: OnUpdateWallet_updateWallet_wallet;
}

export interface OnUpdateWallet {
  updateWallet: OnUpdateWallet_updateWallet;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BoxDetails
// ====================================================

export interface BoxDetails_box {
  id: string;
  name: string | null;
  description: string | null;
  price: number | null;
  iconUrl: string | null;
}

export interface BoxDetails {
  box: BoxDetails_box | null;
}

export interface BoxDetailsVariables {
  ID?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: OpenBox
// ====================================================

export interface OpenBox_openBox_boxOpenings_itemVariant {
  id: string;
  name: string | null;
  value: number;
  iconUrl: string;
}

export interface OpenBox_openBox_boxOpenings {
  id: string;
  itemVariant: OpenBox_openBox_boxOpenings_itemVariant | null;
}

export interface OpenBox_openBox {
  boxOpenings: (OpenBox_openBox_boxOpenings | null)[] | null;
}

export interface OpenBox {
  openBox: OpenBox_openBox | null;
}

export interface OpenBoxVariables {
  input: OpenBoxInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum WalletType {
  AFFILIATE_EARNINGS = "AFFILIATE_EARNINGS",
  BONUS = "BONUS",
  GEMSTONE = "GEMSTONE",
  MAIN = "MAIN",
}

//
export interface OpenBoxInput {
  boxId: string;
  amount?: number | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
