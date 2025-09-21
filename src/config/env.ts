import 'dotenv/config';

function req(name: string, fallback?: string) {
  const v = process.env[name] ?? fallback;
  if (v === undefined) throw new Error(`Missing env: ${name}`);
  return v;
}

export const env = {
  nodeEnv: req('NODE_ENV', 'development'),
  db: {
    host: req('DB_HOST', 'localhost'),
    port: Number(req('DB_PORT', '5432')),
    user: req('DB_USER', 'postgres'),
    pass: req('DB_PASS', 'postgres'),
    name: req('DB_NAME', 'snowball'),
    ssl: /^true$/i.test(req('DB_SSL', 'false')),
  },
  typeorm: {
    logging: /^true$/i.test(req('TYPEORM_LOGGING', 'true')),
    synchronize: /^true$/i.test(req('TYPEORM_SYNCHRONIZE', 'false')),
  },
};
