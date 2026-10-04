import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SubmissionPayload {
  category: "reels" | "photography" | "content" | "artworks";
  fullName: string;
  email: string;
  phone: string;
  title: string;
  description: string;
  driveLink: string;
  agreeToRules: boolean;
}

interface SubmissionState {
  submissions: (SubmissionPayload & { id: string; submittedAt: string })[];
  isSubmitting: boolean;
  successMessage: string | null;
  errorMessage: string | null;
}

const initialState: SubmissionState = {
  submissions: [],
  isSubmitting: false,
  successMessage: null,
  errorMessage: null,
};

export const submissionSlice = createSlice({
  name: "submission",
  initialState,
  reducers: {
    submitStart: (state) => {
      state.isSubmitting = true;
      state.successMessage = null;
      state.errorMessage = null;
    },
    submitSuccess: (state, action: PayloadAction<SubmissionPayload>) => {
      state.isSubmitting = false;
      state.submissions.push({
        ...action.payload,
        id: `NM-${Date.now()}`,
        submittedAt: new Date().toISOString(),
      });
      state.successMessage = "Your submission has been successfully received for NAVMEDHA 2026!";
    },
    submitFailure: (state, action: PayloadAction<string>) => {
      state.isSubmitting = false;
      state.errorMessage = action.payload;
    },
    resetSubmissionStatus: (state) => {
      state.successMessage = null;
      state.errorMessage = null;
      state.isSubmitting = false;
    },
  },
});

export const {
  submitStart,
  submitSuccess,
  submitFailure,
  resetSubmissionStatus,
} = submissionSlice.actions;

export default submissionSlice.reducer;
