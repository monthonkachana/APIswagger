import express from "express";

import {
    getAllMember,
    getAllMemberById,
    createMember,
    updateMember,
    deleteMember,

} from "./../controllers/memberController.js";


/**get all id
 * @swagger
 * /members:
 *   get:
 *     summary: Get all members
 *     tags:
 *       - Members
 *     responses:
 *       200:
 *         description: Members retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   memberName:
 *                     type: string
 *                   memberUsername:
 *                     type: string
 *                   memberPassword:
 *                     type: string
 *                   memberPhone:
 *                     type: string
 *       500:
 *         description: Internal server error
 */
/**get by id
 * @swagger
 * /members/{id}:
 *   get:
 *     summary: Get a member by ID
 *     tags:
 *       - Members
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Member retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 memberName:
 *                   type: string
 *                 memberUsername:
 *                   type: string
 *                 memberPassword:
 *                   type: string
 *                 memberPhone:
 *                   type: string
 *       400:
 *         description: Bad request
 *       404:
 *         description: Member not found
 *       500:
 *         description: Internal server error
 */
/**post create id
 * @swagger
 * /members/:
 *   post:
 *     summary: Create a new member
 *     tags:
 *       - Members
 *     requestBody:
 *       description: Member data to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberName:
 *                 type: string
 *               memberUsername:
 *                 type: string
 *               memberPassword:
 *                 type: string
 *               memberPhone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Member created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
/**put update
 * @swagger
 * /members/{id}:
 *   put:
 *     summary: Update a member by ID
 *     tags:
 *       - Members
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Updated member data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberName:
 *                 type: string
 *               memberUsername:
 *                 type: string
 *               memberPassword:
 *                 type: string
 *               memberPhone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Member updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
/**delete
 * @swagger
 * /members/{id}:
 *   delete:
 *     summary: Delete a member by ID
 *     tags:
 *       - Members
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Member deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */


const router = express.Router();
router.get("/", getAllMember);
router.get("/:id", getAllMemberById);
router.post("/", createMember);
router.put("/:id", updateMember);
router.delete("/:id", deleteMember);

export default router;


