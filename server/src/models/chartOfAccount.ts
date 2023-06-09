import { InferSchemaType, Schema, model } from "mongoose";

const chartOfAccountSchema = new Schema({
  accountNumber: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 5,
    unique: true,
  },
  societyID: { type: Schema.Types.ObjectId, ref: "Society" },
  entitled: { type: String, required: true },
});

chartOfAccountSchema.index(
  { accountNumber: 1, societyID: 1 },
  { unique: true }
);

type ChartOfAccount = InferSchemaType<typeof chartOfAccountSchema>;

export default model<ChartOfAccount>("ChartOfAccount", chartOfAccountSchema);
