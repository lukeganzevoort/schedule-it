import mongoose, { Document, Schema } from "mongoose";

export interface ILeague extends Document {
  name: string;
  description: string;
  userId: mongoose.Types.ObjectId;
  settings: {
    teams: string[];
    fields: string[];
    referees: string[];
    startDate?: Date;
    endDate?: Date;
  };
  schedule: {
    gameId: string;
    homeTeam: string;
    awayTeam: string;
    field: string;
    referee?: string;
    dateTime: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

const leagueSchema = new Schema<ILeague>(
  {
    name: { type: String, required: true },
    description: { type: String, default: "" },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    settings: {
      teams: [{ type: String }],
      fields: [{ type: String }],
      referees: [{ type: String }],
      startDate: { type: Date },
      endDate: { type: Date },
    },
    schedule: [
      {
        gameId: { type: String, required: true },
        homeTeam: { type: String, required: true },
        awayTeam: { type: String, required: true },
        field: { type: String, required: true },
        referee: { type: String },
        dateTime: { type: Date, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ILeague>("League", leagueSchema);
