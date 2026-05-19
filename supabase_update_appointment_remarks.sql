-- Nodig voor het tekstvak "Opmerkingen" bij afspraken.
-- Veilig uit te voeren: bestaande data blijft behouden.
alter table public.appointments
add column if not exists appointment_remarks text;
