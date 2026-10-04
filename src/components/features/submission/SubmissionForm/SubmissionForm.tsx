"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  submitStart,
  submitSuccess,
  submitFailure,
  resetSubmissionStatus,
} from "@/redux/slices/submissionSlice";
import { CategoryConfig } from "@/config/categories";
import styles from "./SubmissionForm.module.css";

interface Props {
  category: CategoryConfig;
}

export function SubmissionForm({ category }: Props) {
  const dispatch = useAppDispatch();
  const { isSubmitting, successMessage, errorMessage } = useAppSelector(
    (state) => state.submission
  );

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    title: "",
    description: "",
    driveLink: "",
    agreeToRules: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToRules) {
      dispatch(submitFailure("Please agree to the festival entry guidelines."));
      return;
    }

    dispatch(submitStart());

    // Simulate submission flow
    setTimeout(() => {
      dispatch(
        submitSuccess({
          category: category.id,
          ...formData,
        })
      );
    }, 1200);
  };

  if (successMessage) {
    return (
      <div className={styles.successContainer}>
        <div className={styles.successCard}>
          <div className={styles.successIconWrap}>
            <Image
              src="/assets/giftsicon.png"
              alt="Success"
              width={140}
              height={140}
              className="floating"
            />
          </div>
          <h3 className={styles.successTitle}>Entry Submitted!</h3>
          <p className={styles.successMessage}>{successMessage}</p>
          <div className={styles.submittedDetails}>
            <p><strong>Category:</strong> {category.title}</p>
            <p><strong>Title:</strong> {formData.title}</p>
            <p><strong>Participant:</strong> {formData.fullName}</p>
          </div>
          <div className={styles.successActions}>
            <button
              onClick={() => {
                dispatch(resetSubmissionStatus());
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  title: "",
                  description: "",
                  driveLink: "",
                  agreeToRules: false,
                });
              }}
              className="secondary-btn"
            >
              Submit Another Entry
            </button>
            <Link href="/" className="hero-btn">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.submitForm} onSubmit={handleSubmit}>
        {errorMessage && (
          <div className={styles.errorAlert}>
            ⚠️ {errorMessage}
          </div>
        )}

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Full Name *</label>
            <input
              type="text"
              placeholder="e.g. Debolina Banerjee"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Email Address *</label>
            <input
              type="email"
              placeholder="e.g. debolina@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Phone / WhatsApp Number *</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Category Selected</label>
            <input
              type="text"
              value={category.title}
              disabled
              className={styles.disabledInput}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Title of Your Masterpiece *</label>
          <input
            type="text"
            placeholder="e.g. Agomoni: The Divine Radiance"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Artwork Story / Concept Description</label>
          <textarea
            rows={4}
            placeholder="Describe the inspiration, techniques, or narrative behind your submission..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Google Drive / Cloud File Link *</label>
          <input
            type="url"
            placeholder="https://drive.google.com/file/d/..."
            value={formData.driveLink}
            onChange={(e) => setFormData({ ...formData, driveLink: e.target.value })}
            required
          />
          <span className={styles.inputHelp}>
            Please ensure link sharing permission is set to <strong>&ldquo;Anyone with the link can view&rdquo;</strong>.
          </span>
        </div>

        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={formData.agreeToRules}
              onChange={(e) => setFormData({ ...formData, agreeToRules: e.target.checked })}
              required
            />
            <span>I confirm that this is my original creative work adhering to the guidelines of NAVMEDHA 2026.</span>
          </label>
        </div>

        <div className={styles.formSubmitBtnWrap}>
          <button
            type="submit"
            disabled={isSubmitting}
            className="hero-btn"
            style={{ width: "100%", fontSize: "1.1rem", opacity: isSubmitting ? 0.7 : 1 }}
          >
            {isSubmitting ? "Submitting Your Masterpiece..." : `Submit to ${category.title} 𑁍`}
          </button>
        </div>
      </form>
    </div>
  );
}
