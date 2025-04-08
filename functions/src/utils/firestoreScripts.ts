// src/utils/firestoreHelper.ts

import * as admin from "firebase-admin";

// Inicialize o Firestore caso ainda não esteja inicializado
if (!admin.apps.length) {
    admin.initializeApp();
}
const db = admin.firestore();


/**
 * Atualiza o status do airdrop no Firestore para o usuário especificado.
 * 
 * @param uid - ID do usuário.
 * @param category - Categoria do airdrop (e.g., "SmartContracts", "introWeb3").
 * @param status - Status do minting, "true" ou "false".
 * @param txHash - Hash da transação.
 */
export async function updateAirdropStatus(
    uid: string,
    category: string,
    status: boolean,
    txHash: string | ""
): Promise<void> {
    const userRef = db.collection("whitelist").doc(uid);

    // Atualiza os campos de minted e txHash para a categoria especificada
    await userRef.update({
        [`status.${category}.minted`]: status,
        [`status.${category}.txHash`]: txHash,
    });
}