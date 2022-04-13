# Publishing process

1. `ent prj init`
2. `ent prj pbs-init` (requires the git bundle repo url)
3. `ent prj fe-build -a` (to just build the frontend, including changes from bundle_src)
4. `ent prj fe-push` (publish just the frontend)
5. For a local Entando installation: `ent prj deploy`
6. Install via `ent prj install` or App Builder
7. Iterate on steps 3-6.

# Local test run (equivalent to npm start)
1. `ent prj fe-test-run`
