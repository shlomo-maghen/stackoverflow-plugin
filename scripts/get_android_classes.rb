require 'open-uri'
require 'nokogiri'

page = Nokogiri::HTML open "http://developer.android.com/reference/classes.html"

classes = page.css ".jd-linkcol a"
puts "["
classes.each do |c|
  puts "{\"class\":\"#{c.text}\",\"href\":\"http://developer.android.com#{c.attr "href"}\"},"
end
puts "]"
