json.array!(@competitions) do |competition|
  json.extract! competition, :id, :prize, :Date
  json.url competition_url(competition, format: :json)
end
