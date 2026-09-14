---
name: source-driven-development
description: Verifica APIs, frameworks, SDKs y comportamientos cambiantes contra documentación actual y versión real antes de implementar.
---
# Source-driven development

`CURRENT_OFFICIAL_DOCS + INSTALLED_VERSION > MODEL_MEMORY`.

Identifica versión real; docs/changelog oficiales y docs locales versionadas primero; Context7/equivalente solo si acelera versión específica; separa API documentada/comportamiento observado/workaround; implementa cambio mínimo compatible; ejecuta verificación real; contradicción docs/runtime -> conservar evidencia y diagnosticar.
