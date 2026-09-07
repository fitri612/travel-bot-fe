---
version: 1.0.0
name: TravelBot-design-analysis
description: |
  Sebuah sistem penjelajahan dan asisten perjalanan pintar berbantuan AI yang dirancang dengan estetika warm cream netral, dipadukan dengan aksen TravelBot Red CTA (#e60023). Desain ini mengutamakan kenyamanan membaca informasi destinasi dan kemudahan berinteraksi dengan chatbot, menggunakan tombol berbentuk pill/rounded yang ramah (16px & 9999px), serta bilah navigasi dan footer yang bersih.

colors:
  primary: '#e60023'
  on-primary: '#ffffff'
  primary-pressed: '#cc001f'
  ink: '#000000'
  ink-soft: '#211922'
  body: '#33332e'
  charcoal: '#262622'
  mute: '#62625b'
  ash: '#91918c'
  stone: '#c8c8c1'
  hairline: '#dadad3'
  hairline-soft: '#e5e5e0'
  on-secondary: '#000000'
  secondary-bg: '#e5e5e0'
  secondary-pressed: '#c8c8c1'
  canvas: '#ffffff'
  surface-soft: '#fbfbf9'
  surface-card: '#f6f6f3'
  surface-elevated: '#ffffff'
  on-dark: '#ffffff'
  on-dark-mute: 'rgba(255,255,255,0.7)'
  surface-dark: '#262622'
  focus-outer: '#435ee5'
  focus-inner: '#ffffff'

typography:
  display-xl:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1.2px
  display-lg:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.8px
  heading-xl:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -1.2px
  heading-lg:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  heading-md:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body-md:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body-strong:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-sm:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body-sm-strong:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  caption-sm:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  button-md:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0

rounded:
  none: 0px
  sm: 8px
  md: 16px
  lg: 24px
  full: 9999px

spacing:
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 64px

components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.button-md}'
    rounded: '{rounded.full}'
    padding: 12px 24px
    height: 44px
  button-primary-pressed:
    backgroundColor: '{colors.primary-pressed}'
    textColor: '{colors.on-primary}'
  button-secondary:
    backgroundColor: '{colors.secondary-bg}'
    textColor: '{colors.on-secondary}'
    typography: '{typography.button-md}'
    rounded: '{rounded.full}'
    padding: 12px 20px
    height: 44px
  search-bar:
    backgroundColor: '{colors.surface-card}'
    textColor: '{colors.ink}'
    typography: '{typography.body-md}'
    rounded: '{rounded.full}'
    padding: 12px 20px
    height: 48px
  chat-card:
    backgroundColor: '{colors.canvas}'
    textColor: '{colors.ink}'
    rounded: '{rounded.lg}'
    padding: 24px
  category-tile:
    backgroundColor: '{colors.surface-card}'
    textColor: '{colors.ink}'
    rounded: '{rounded.md}'
    padding: 16px
  primary-nav:
    backgroundColor: '{colors.canvas}'
    textColor: '{colors.ink}'
    rounded: '{rounded.none}'
    height: 64px
  footer-section:
    backgroundColor: '{colors.canvas}'
    textColor: '{colors.mute}'
    rounded: '{rounded.none}'
    padding: 32px 24px
---

## Overview

Sistem antarmuka **TravelBot** dirancang khusus untuk memberikan pengalaman perencanaan liburan yang intuitif, bersih, dan modern. Palet warna didominasi oleh warna krem hangat netral (`{colors.surface-soft}`, `{colors.surface-card}`, `{colors.canvas}`) untuk menjaga kenyamanan mata saat membaca informasi perjalanan, dengan aksen merah TravelBot (`{colors.primary}` — `#e60023`) yang digunakan secara eksklusif untuk aksi utama (CTA Sign Up, tombol kirim chat, dan identitas brand).

## Prinsip Desain Utama

1. **Aksen Tunggal yang Tegas:** Warna merah TravelBot Red (`#e60023`) dialokasikan khusus untuk tombol tindakan utama (CTA) dan indikator aktif.
2. **Geometri Ramah (Pill & Soft Radius):** Komponen input dan tombol menggunakan gaya _Pill_ (`rounded.full`), sedangkan kartu informasi dan antarmuka chat menggunakan radius 16px (`rounded.md`) hingga 24px (`rounded.lg`).
3. **Kombinasi 2 Kolom Interaktif:** Menghadirkan _sidebar_ ide destinasi populer di sisi kiri dan jendela percakapan AI Travel Assistant utama di sisi kanan.