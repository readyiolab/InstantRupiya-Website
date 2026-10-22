CREATE TABLE public.ai_feature_state (
 feature text PRIMARY KEY,
 status integer NOT NULL,
 message text NOT NULL,
 updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.ai_feature_state TO service_role;
ALTER TABLE public.ai_feature_state ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.ai_feature_state IS 'Server-only persistent terminal AI access blocks; no borrower details are stored. No client grants or policies intentionally.';