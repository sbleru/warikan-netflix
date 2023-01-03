# backend

APIs for warikan-netflix

## Usage

### Setup stripe secret

1. Log in to the target Firebase project.

```bash
npm run firebase-login
```

2. Rewrite default project in [.firebaserc](.firebaserc)

```json
{
  "projects": {
    "default": "<Your Firebase ProjectID>"
  }
}
```

3. Set your stripe secret

```
npm run secrets-set STRIPE_SECRET
```

- Secret Manager API must be enabled.

## Note

- Downgrading the version of `firebase-tools` because of an error in `firebase serve`.
  - https://github.com/firebase/firebase-tools/issues/4952
